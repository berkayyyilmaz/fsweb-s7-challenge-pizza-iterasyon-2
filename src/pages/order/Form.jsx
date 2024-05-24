import React from 'react'
import ekMlz from '../../data/ekMlz.json'
import Check from '../../components/Checkbox/Check'
import Quantity from '../../components/Quantity/Quantity'
import './Form.css'
import { Container, Row, Col } from 'reactstrap';
import selectSize from '../../data/selectSize.json';
import selectDough from '../../data/selectDough.json'


function Form({
    handleSubmit,
    handleChange,
    formData,
    setFormData
}) {

return (

  <form onSubmit={handleSubmit}>
    <Container>
      <Row>
        <Col>
          <label className='form-subtitle'>Boyut Seç <span className='asterix'>*</span></label>
          <div className='size-options'>
            {selectSize.map((selectedItem,index)=> (
            <label className='option-label' key={index}><input type="radio" id="radio-button" value={selectedItem} name='size' onChange={handleChange} checked={formData.size === selectedItem}/>
            {selectedItem}</label>
            ))}
          </div>
        </Col>
        <Col className='select-dough'>
        <label className='form-subtitle'>Hamur Seç <span className='asterix'>*</span></label>
          <div><select className='dough-selector' name = "doughTickness" onChange={handleChange} value={formData.doughTickness}>
          {selectDough.map((selectedItem, index)=> (<option key={index} value={selectedItem} hidden={selectedItem === 'Hamur Kalınlığı' ? true : false}>{selectedItem}</option>))}
          </select></div>
        </Col>
      </Row> 

      <Row>
        <Col xs="12" className='materials-column'>
          <label className='form-subtitle'>Ek Malzemeler</label>
          <p className='materials-note'>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className='checkbox-container'>
            {ekMlz.map((item, index)=> (
              <Check
                changeFn={handleChange}
                isChecked={formData.toppings && formData.toppings.includes(item.value)}
                fieldName="toppings"
                value={item.value}
                label={item.label}
                key={index}
              />
          ))}
          </div>
        </Col>
      </Row>

      <Row>
      <div className='text'><label className='form-subtitle'>İsim</label><input placeholder=' Lütfen İsminizi Giriniz...'type="text" name="clientName" onChange={handleChange} value={formData.clientName}/></div>

      <div className='text'><label className='form-subtitle'>Sipariş Notu</label><input placeholder=' Siparişinize eklemek istediğiniz bir not var mı?' type="text" name="purchaseNote" onChange={handleChange} value={formData.purchaseNote}/></div>
      </Row>
    <hr />
    <Row className='check-out'>
    <Col xs='5' className='column-quantity'>
    <Quantity formData={formData} setFormData={setFormData}/>
    </Col>
    <Col xs='7' className='column-totals'>
    <div className='total-calc'>
    <label className='form-subtitle'>Sipariş Toplamı</label>
    <div className='calcname-calc'><label>Seçimler</label><label>{parseFloat(formData.toppingCost).toFixed(2)}₺</label></div>
    <div className='calcname-calc'><label className='all-totals'>Toplam</label><label className='all-totals'>{parseFloat(formData.totalCost).toFixed(2)}₺</label></div>
    </div>
    <button type='submit' className='order' >Sipariş Ver</button>
    </Col>
    </Row>
    </Container>
  </form>
  )
}

export default Form