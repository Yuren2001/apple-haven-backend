const cloudinary = require("cloudinary");
const router = require("express").Router();
require("dotenv").config();

cloudinary.config({
  cloud_name: "dyfv8q3v2",
  api_key: "315388585426286",
  api_secret: "MLA-m446TkJmNw7TB9P6XtK2Rk8",
});

router.delete("/:public_id", async (req, res) => {
  const { public_id } = req.params;
  try {
    await cloudinary.uploader.destroy(public_id);
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
