exports.handler = async function(event, context){
  return{
    statusCode: 200,
    body: JSON.stringify({
      name: 'Voyage',
      age: 85,
      email: 'kyusung612@gmail.com'
    })
  }
}