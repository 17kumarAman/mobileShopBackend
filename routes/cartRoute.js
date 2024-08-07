const express = require("express");
const User = require("../models/userModel");
const Mobile = require("../models/mobileModel");
const router = express.Router();

// Add mobile to cart
router.post("/:userId/cart/add", async (req, res) => {
  const { userId } = req.params;
  const { mobileId, quantity } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const mobile = await Mobile.findById(mobileId);
    if (!mobile) return res.status(404).json({ error: "Mobile not found" });

    // Check if item already in cart
    const existingItem = user.cart.find(
      (item) => item.mobileId.toString() === mobileId
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      user.cart.push({ mobileId, quantity });
    }

    await user.save();
    res.status(201).json(user.cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get cart items for a user
router.get("/:userId/cart", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate("cart.mobileId");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update cart item quantity
router.patch("/:userId/cart/:itemId", async (req, res) => {
  const { userId, itemId } = req.params;
  const { quantity } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const cartItem = user.cart.id(itemId);
    if (!cartItem)
      return res.status(404).json({ error: "Cart item not found" });

    cartItem.quantity = quantity;
    await user.save();
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Remove item from cart
router.delete("/:userId/cart/:itemId", async (req, res) => {
  const { userId, itemId } = req.params;

  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the cart item exists
    const cartItemIndex = user.cart.findIndex(
      (item) => item._id.toString() === itemId
    );
    if (cartItemIndex === -1) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    // Remove the cart item from the cart array
    user.cart.splice(cartItemIndex, 1);

    // Save the user document
    await user.save();
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
