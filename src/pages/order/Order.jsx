import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
//Data
import initialFormData from '../../data/initialFormData.json'
import pizzaInfo from '../../data/pizzaInfo.json'
//Components
import Form from './Form'
import Header from '../../components/Header/Header'
import PizzaInformation from '../../components/PizzaInformation/PizzaInformation'

//Toastify
import { ToastContainer,toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Order.css'
import { Container, Row, Col } from 'reactstrap';

function Order() {
  const [formData,setFormData] = useState(initialFormData);
  const history = useHistory();

const handleChange = (e) => {
  console.log(e.target.value)
  const {name, value, checked, type} = e.target;
  //Checking the checkboxes
  let newValue;
  if (type && type ==='checkbox') {
    const oldValues = formData[name];
    if (oldValues.includes(value)){
      newValue = oldValues.filter((v)=> v !== value);
    } else{
      newValue = [...oldValues, value];
    }
  } else {
    newValue = value;
  }

  setFormData({
    ...formData,
    [name]: newValue,
  })
}

useEffect(() => {
  const newFormData = {
    ...formData,
    toppingCost: formData.toppings.length * 5 * formData.quantity,
    totalCost: formData.toppings.length * 5 * formData.quantity + pizzaInfo.price * formData.quantity
  };

  setFormData(newFormData);
}, [formData.toppings, formData.quantity]);

const handleClear = () =>{
  setFormData(initialFormData);
}

const handleSubmit = (e) =>{
  e.preventDefault();
  
  const checkFormValidity = (data) => {
    const errors =[];
    if (!data.size) {
      errors.push("Lütfen pizza boyutunu seçin.");
    }
    if (data.doughTickness === "Hamur Kalınlığı") {
      errors.push("Lütfen hamur kalınlığını seçiniz.");
    }
    if (data.clientName.length<3) {
      errors.push("İsim en az 3 harfli olmalıdır.");
    }
    if (data.toppings.length>10) {
      errors.push("En fazla 10 malzeme seçebilirsin.");
    }
    return errors;
  }

  const errors = checkFormValidity(formData)

  if (errors.length>0) {
    errors.forEach(error => {
      toast.error(error, {transition: Flip});
    })
    return; //Hata varsa aşağıya geçmemesi için
  }


    console.log(formData)
    toast.success('Siparişiniz Alınıyor', {
    position: "bottom-center",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    progress: undefined,
    theme: "light",
    transition: Flip,
    });
      handleClear();
      setTimeout(() => {
        history.push('/siparisalindi');
        
      }, 2800);
  
}
  const handleMenuClick = () => {
    toast.warn('Daha çok yeniyiz ve menü hazır değil 😥, Bu pizzayı yesen olmaz mı? 😪')
  }

  return (
    <Container fluid className="full-height">
      <Header handleMenuClick={handleMenuClick}/>
      <Row>
        <Col xs="4" className='left-blank'></Col>
        <Col xs="4" className='content' >
          <PizzaInformation/>
          <Form handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
          />
        </Col>
      </Row>
      <ToastContainer/>
      </Container>
  )
}

export default Order