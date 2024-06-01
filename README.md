
## Tech Stack
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap](https://getbootstrap.com/)

<!-- -->
// Это в логине
 import Cookies from 'universal-cookie';
const cookies = new Cookies();
cookies.set('Authorization', Bearer ${authenticationResponse.data.token}, { path: '/' });

// import Cookies from 'universal-cookie';
      const cookies = new Cookies();
      const token_ = cookies.get('Authorization');
      const response_ = await fetch("http://localhost:8080/api/public/product/list?page=0&size=100", {
        method: "GET",
        // mode: "cors",
        headers: {
          //"Authorization": token_,
          "Content-Type": "application/json",
        }
      });
      const json = await response_.json();
      const products = [];
      console.log(json);

      for (const product of json.content) {
        const image_response = await fetch(http://localhost:8080/api/private/images/${product.image_filename}, {
          method: "GET",
          // mode: "cors",
          headers: {
            "Authorization": token_,
            "Content-Type": "application/json",
          }
        });
        product.image_filename = await image_response.text();
        console.log(product.image_filename);
        product.name = product.name + "";
        product.description = product.description + "";
        product.price = product.price + "";
        try {
          product.category = product.categories[0].name;
        } catch(e) {console.log(1);}
        if (product)
          products.push(product);
      }

      
Только замени await fetch на какую-нибудь удобнее тебе штуку.
И везде можешь прописать, как уже написано в профиле.
const [formData, setFormData] = useState({
    firstName: "Daniel",
    lastName: "Adams",
    email: "daniel.adams@example.com",
    phone: "+7 (805) 348 95 72",
    newPassword: "",
    confirmPassword: "",
    subscribe: true,
  });

if (json)
      setFormData({
        firstName: json.buyer.name + "",
        lastName: json.buyer.surname + "",
        email: json.username + "",
        phone: "",
        newPassword: "",
        confirmPassword: "",
        subscribe: true,
      });

Чтобы была модель, которую нужно заполнять значениями.
В каждом компоненте нужен запрос на сервер, и он берёт с него данные.
const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Отправка на сервер Изменение профиля
     const response = await fetch(http://localhost:8080/api/private/buyer/change/,  {
          method: "GET",
          // mode: "cors",
          headers: {
            "Authorization": token_,
            "Content-Type": "application/json",
          },
         body: {
          "id": 0,
          "name": ${formData.firstName},
           ....
        }
        });
     //
      setFormData({ ...formData });
    } else {
      setErrors(validationErrors);
    }
  };