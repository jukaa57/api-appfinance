/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { status: 'Connenction Sucess' }
})


Route.post('/aluguel', "AluguelController.createAluguel")
Route.get('/galuguel', "AluguelController.getAluguel")
Route.get('/galuguelpago', "AluguelController.getAluguelPago")
Route.get('/galuguelaberto', "AluguelController.getAluguelAberto")
Route.put('/ualuguel', "AluguelController.updateAluguel")
Route.post('/deletealuguel', "AluguelController.deleteAluguel")


Route.post('/luz', "LuzController.createLuz")
Route.get('/gluz', "LuzController.getLuz")
Route.get('/gluzpago', "LuzController.getLuzPago")
Route.get('/gluzaberto', "LuzController.getLuzAberto")
Route.put('/uluz', "LuzController.updateLuz")
Route.post('/deleteluz', "LuzController.deleteLuz")


Route.post('/agua', "AguaController.createAgua")
Route.get('/gagua', "AguaController.getAgua")
Route.get('/gaguapago', "AguaController.getAguaPago")
Route.get('/gaguaaberto', "AguaController.getAguaAberto")
Route.put('/uagua', "AguaController.updateAgua")
Route.post('/deleteagua', "AguaController.deleteAgua")


Route.post('/internet', "InternetController.createInternet")
Route.get('/ginternet', "InternetController.getInternet")
Route.get('/ginternetpago', "InternetController.getInternetPago")
Route.get('/ginternetaberto', "InternetController.getInternetAberto")
Route.put('/uinternet', "InternetController.updateInternet")
Route.post('/deleteinternet', "InternetController.deleteInternet")


Route.post('/transporte', "TransporteController.createTransporte")
Route.get('/gtransporte', "TransporteController.getTransporte")
Route.get('/gtransportevalor', "TransporteController.getTransporteValor")
Route.post('/deletetransporte', "TransporteController.deleteTransporte")
// Route.put('/utransporte', "TransporteController.updateTransporte")


Route.post('/mercado', "MercadoController.createMercado")
Route.get('/gmercado', "MercadoController.getMercado")
Route.get('/gmercadovalor', "MercadoController.getMercadoValorTotal")
Route.get('/gmercadovalor', "MercadoController.getMercadoValorTotal")
Route.post('/deletemercado', "MercadoController.deleteMercado")


Route.post('/meta', "MetaController.createMeta")
Route.post('/depositar', "MetaController.deposito")
Route.get('/gmeta', "MetaController.getMeta")
Route.get('/gmetavalor', "MetaController.getMetaValorTotal")
Route.get('/gmetadepositado', "MetaController.getMetaTotalDepositado")
Route.post('/deletemeta', "MetaController.deleteMeta")
