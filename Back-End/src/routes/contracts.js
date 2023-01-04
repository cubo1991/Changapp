const { Router } = require("express");
const ContractController = require("../controllers/ContractController");

const router = Router();

router.get("/:id?", async (res, req, next) => {
  //code
  const { id } = req.params;
  const { supplier, user, date } = req.query;

  try {
    const dbContracts = id
      ? await ContractController.findById(id) // buscamos contract por id
      : supplier
      ? await ContractController.findBySupplier(supplier) // buscamos contract por supplier id
      : user
      ? await ContractController.findByUser(user) // buscamos contract por user id
      : await ContractController.find(date); // buscamos todos por fecha

    if (!dbContracts)
      // no se encontraron contracts
      return res.status(404).json({ error: "No hubo resultados" });
  } catch (error) {
    console.error("GET /contracts ContractController error");

    next(error);
  }
});

router.post("/", async (res, req, next) => {
  const { date, SupplierServiceId, SupplierId, UserId } = req.body;

  if (!date || !SupplierServiceId || !SupplierId || !UserId)
    return res
      .status(400)
      .json({ error: "Faltan datos obligatorios por cargar" });

  const newContract = { date, SupplierServiceId, SupplierId, UserId };

  try {
    const dbContract = await ContractController.add(newContract);

    return res.status(201).json(dbContract);
  } catch (error) {
    // TODO: deberiamos capturar errores de ID
    console.error("POST /contracts ContractController.add error");

    next(error);
  }
});

router.put("/:id", async (res, req, next) => {
  const { id } = req.params;
  const { date, SupplierServiceId, SupplierId, UserId } = req.body;

  if (!id || !date || !SupplierServiceId || !SupplierId || !UserId)
    return res
      .status(400)
      .json({ error: "Faltan datos obligatorios por cargar" });

  const dataContract = { date, SupplierServiceId, SupplierId, UserId };

  try {
    const dbContract = await ContractController.update(id, dataContract);

    return res.status(200).json(dbContract);
  } catch (error) {
    // TODO: deberiamos capturar errores de ID
    console.error("PUT /contracts ContractController.update error");

    next(error);
  }
});

router.delete("/:id", async (res, req, next) => {
  const { id } = req.params;

  if (!id) return res.status(400).send();

  try {
    await ContractController.remove(id);

    return res.status(200).send();
  } catch (error) {
    // TODO: deberiamos capturar errores de ID
    console.error("DELETE /contracts ContractController.remove error");

    next(error);
  }
});

module.exports = router;
