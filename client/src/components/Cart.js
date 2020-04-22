import React from 'react'
import { Button, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { CartConsumer, } from "../providers/CartProvider";
import {style, ItemsContainer, Item, PhotoHolder} from './SharedComponents/CartStyle'

class Cart extends React.Component {
  state = {
    cart: [],
    total: 0,
  }

  deleteCartItem = (id) => {
    const {auth:{deleteItemFromCart,}} = this.props
    deleteItemFromCart(id)
    this.putItemsInCart()
  }

  componentDidMount() {
    this.putItemsInCart()
  }


  putItemsInCart() {
    const {auth:{getCart}} = this.props
    let cart = getCart()
    this.setState({ cart: cart })
    if (cart.length > 0) {
      this.addTotal(cart)
    }
  }

  addTotal = (cart) => {
    let total = 0
    cart.forEach(item => {
      total += item.object.price
    })
    this.setState({ total: total.toFixed(2) })
  }

  renderCartItems = () => {
    const { cart, total} = this.state
    if (cart.length > 0) {
      return (
        <ItemsContainer>
          <div style={style.cartContainer}>
            {cart.map(item => {
              return (
                <Item key={`cartItem-${item.id}`}>
                  <div style={{display:'flex', justifyContent:'center'}}>
                  <PhotoHolder >
                    <div style={style.crop}>
                      <Image style={style.photo} src={`${item.object.main_image}`} />
                    </div>
                  </PhotoHolder>
                  </div>

                  <div style={style.informationContainer}>
                    <div>
                      <h3 style={{ margin: '0px',}}>{item.object.title}</h3>
                      <h6 style={{ margin: '0px', color: '#777'}}>{item.size}</h6>
                    </div>
                    <div>
                      <h1>${item.object.price}</h1>
                    </div>
                  </div>
                  <div>
                    <div style={style.removeButton} onClick={() => this.deleteCartItem(item.id)}>Remove</div>
                  </div>
                </Item>
              )
            })}
          </div>

          <div style={{textAlign:'center'}}>
            <Header as='h1' textAlign='center'>Total: ${total}</Header>
              <Link to='purchase-record' style={{color: 'white' }}><div style={style.button}>Checkout</div></Link>
          </div>
        </ItemsContainer>
      )
    }
    else {
      return (
        <ItemsContainer>
          <Header as='h1' textAlign='center' style={{ margin: '5%' }}>No Items In Cart</Header>
          <div style={{textAlign:'center'}}>
            <div style={style.buttonDisabled}>Checkout</div>
          </div>
        </ItemsContainer>)
    }
  }

  render() {
    return (
      <div>
        <div style={style.headerContainer}>

          <Link to='/'><Button style={style.headerButton}>Continue Shopping</Button></Link>
          <h1 style={style.header}>My Cart</h1>
        </div>
        {this.renderCartItems()}
      </div>
    )
  }
}

export class ConnectedCart extends React.Component {
  render() {
    return (
      <CartConsumer> 
        { auth => 
          <Cart { ...this.props } auth={auth} />
        }
      </CartConsumer>
    )
  }
}



export default ConnectedCart
