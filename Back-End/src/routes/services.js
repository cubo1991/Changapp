const { Router } = require('express');


const router = Router();

router.use(require('../middlewares/filterByCategory.js'));
router.use(require('../middlewares/filterByLocation.js'));
//Ruta /services?filter=undefined&type=ASC(ó DESC) => para ordenar todos los services por pricePerHour ASC o DESC
//Ruta /services?filter=(string con services separados por coma)&type=ASC(ó DESC) => para ordenar los servicios que se manden desde el front en caso de estar filtrados
router.use(require('../middlewares/ServicesOrderByPrice.js'));

//Ruta /services?filter=undefined&type=ASC(ó DESC) => para ordenar todos los services por pricePerHour ASC o DESC
//Ruta /services?filter=(string con services separados por coma)&type=ASC(ó DESC) => para ordenar los servicios que se manden desde el front en caso de estar filtrados
router.use(require('../middlewares/postService.js'))
router.use(require('../middlewares/servicesSearch.js'));

module.exports = router;
