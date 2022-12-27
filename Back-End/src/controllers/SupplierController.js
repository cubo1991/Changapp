const {
  Detail,
  Contract,
  Review,
  Service,
  Supplier,
  Op,
  fn,
  conn,
} = require("../db");

const findQuery = {
  include: [
    { model: Review, attributes: [] },
    { model: Detail },
    { model: Contract, attributes: [] },
    {
      model: Service,
      attributes: [
        "serviceType",
        "pricePerHour",
        "description",
        "representative_image",
      ],
    },
  ],
};

const aggregationQuery = {
  attributes: {
    include: [
      [fn("AVG", conn.col("Reviews.rating")), "avgRating"],
      [fn("COUNT", conn.col("Reviews.rating")), "countRatings"],
      [fn("COUNT", conn.col("Contracts.id")), "countContracts"],
    ],
  },
  group: [
    "Supplier.id",
    "Detail.id",
    "Contracts.id",
    "Services.id",
    "Services->SupplierService.id",
  ],
};

const findByName = async (name) => {
  try {
    if (name) findQuery.where = { name: { [Op.iLike]: `%${name}%` } };

    const dbSuppliers = await Supplier.findAll({
      ...findQuery,
      ...aggregationQuery,
    });
    return dbSuppliers;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findById = async (id) => {
  try {
    const dbSupplier = await Supplier.findByPk(id, {
      ...findQuery,
      ...aggregationQuery,
    });
    return dbSupplier;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const add = async ({
  name,
  cuit,
  description,
  logo,
  location,
  adress,
  phoneNumber,
  eMail
}) => {
  try {
    if(logo){
      var newSupplier = await Supplier.create(
        {
          name,
          cuit,
          description,
          logo,
          Detail: { location, adress, phoneNumber, eMail },
        },
        { include: [Detail] }
      ); 
    } else {
      var newSupplier = await Supplier.create(
        {
          name,
          cuit,
          description,
          Detail: { location, adress, phoneNumber, eMail },
        },
        { include: [Detail] }
      );
    }
  

    // retornamos asi para mantener el formato consistente
    return await findById(newSupplier.id);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  findByName,
  findById,
  add,
};
