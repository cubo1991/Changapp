const { Router } = require("express");
const SupplierController = require("../controllers/SupplierController");
const {
  uploadImage,
  uploadMulter,
} = require("../controllers/cloudinaryController");
const fs = require("fs-extra");

const router = Router();

// GET /suppliers/:id? ?name= ?sort_by=
router.get("/:id?", async (req, res, next) => {
  const { name, sort_by } = req.query;
  const { id } = req.params;

  try {
    const dbSuppliers = id
      ? await SupplierController.findById(id)
      : await SupplierController.findByName(name, sort_by);

    if (!dbSuppliers)
      return res.status(404).json({ error: "No hubo resultados" });

    return res.status(200).json(dbSuppliers);
  } catch (error) {
    next(error);
  }
});

// POST /suppliers
router.post(
  "/",
  uploadMulter("./public/Images").single("image"),
  async (req, res, next) => {
    const { name, cuit, description, location, adress, phoneNumber, eMail } =
      req.body;

    if (
      !name ||
      !cuit ||
      !description ||
      !location ||
      !adress ||
      !phoneNumber ||
      !eMail
    )
      return res
        .status(404)
        .json({ error: "Faltan datos obligatorios por cargar" });

    const newSupplier = {
      name,
      cuit,
      description,
      location,
      adress,
      phoneNumber,
      eMail,
    };

    if (req.file) {
      try {
        const result = await uploadImage(req.file.path);
        fs.unlink(req.file.path);

        newSupplier.logo = result.secure_url;
      } catch (error) {
        console.error("POST /suppliers uploadImage error");

        return next(error);
      }
    }

    try {
      const dbSupplier = await SupplierController.add(newSupplier);

      return res.status(201).json(dbSupplier);
    } catch (error) {
      console.error("POST /suppliers SupplierController.add error");

      next(error);
    }
  }
);

module.exports = router;
