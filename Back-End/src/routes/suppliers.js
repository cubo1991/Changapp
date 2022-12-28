const { Router } = require("express");
const SupplierController = require("../controllers/SupplierController");

const router = Router();

// router.use(require("../middlewares/SupplierReviewOrderByRating"));
// router.use(require("../middlewares/suppliersSearcher"))

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

router.post("/", async (req, res, next) => {
  const {
    name,
    cuit,
    description,
    location,
    adress,
    phoneNumber,
    eMail,
    formData,
  } = req.body;

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

  console.log(formData);

  try {
    const dbSupplier = await SupplierController.add(req.body);

    return res.status(201).json(dbSupplier);
  } catch (error) {
    if (
      [
        "DuplicatedNameOrSlugInApiError",
        "ReleasedInvalidDateError",
        "PlatformsEmptyError",
      ].includes(error.name)
    )
      return res.status(400).json({ error: error.message });

    next(error);
  }
});

module.exports = router;
