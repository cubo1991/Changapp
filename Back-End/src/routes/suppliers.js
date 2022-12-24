const { Router } = require("express");
const SupplierController = require("../controllers/SupplierController");

const router = Router();

router.use(require("../middlewares/SupplierReviewOrderByRating"));
// router.use(require("../middlewares/suppliersSearcher"))

router.get("/:id?", async (req, res, next) => {
  const { name } = req.query;
  const { id } = req.params;

  console.log("id", id);
  console.log("name", name);

  try {
    const dbSuppliers = id
      ? await SupplierController.findById(id)
      : await SupplierController.findByName(name);
    
    if (!dbSuppliers)
      return res.status(404).send({ error: "No hubo resultados" });

    return res.status(200).json(dbSuppliers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
