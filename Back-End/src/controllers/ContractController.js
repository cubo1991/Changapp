const {
  Contract,
  Supplier,
  User,
  ServiceSupplier,
  Review,
  Op,
  fn,
  conn,
} = require("../db");

const findQuery = {
  include: [Supplier, User, ServiceSupplier, Review],
  order: ["-date"],
};

const add = async ({ date, UserId, SupplierServiceId, SupplierId }) => {
  try {
    const newContract = await Contract.create({
      date,
      UserId,
      SupplierServiceId,
      SupplierId,
    });

    // retornamos asi para mantener el formato consistente
    return await findById(newContract.id);
  } catch (error) {
    // TODO: deberiamos capturar errores de ID
    console.error(error);
    throw error;
  }
};

const update = async (id, { date, UserId, SupplierServiceId, SupplierId }) => {
  try {
    const updateContract = await Contract.update(
      { date, UserId, SupplierServiceId, SupplierId },
      { where: { id } }
    );

    // retornamos asi para mantener el formato consistente
    return await findById(id);
  } catch (error) {
    // TODO: deberiamos capturar errores de ID
    console.error(error);
    throw error;
  }
};

const remove = async (id) => {
  try {
    const deletedRows = await Contract.destroy({ where: { id } });

    return deletedRows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const find = async (date) => {
  const localQuery = { ...findQuery };

  try {
    if (date) localQuery.where = { date };

    const dbContracts = await Contract.findAll(localQuery);

    return dbContracts.length ? dbContracts : null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findById = async (id) => {
  try {
    const dbContract = await Contract.findByPk(id, findQuery);

    return dbContract;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findBySupplier = async (SupplierId) => {
  const localQuery = { where: { SupplierId }, ...findQuery };

  try {
    const dbContracts = await Contract.findAll(localQuery);

    return dbContracts.length ? dbContracts : null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findByUser = async (UserId) => {
  const localQuery = { where: { UserId }, ...findQuery };

  try {
    const dbContracts = await Contract.findAll(localQuery);

    return dbContracts.length ? dbContracts : null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  add,
  update,
  remove,
  findById,
  findBySupplier,
  findByUser,
  find,
};
