import styled from 'styled-components'

export const style = {
  button: {
    color: 'white',
    backgroundColor: '#4901DB',
    borderRadius: '30px',
    width: '100%',
    padding:'2%'
  },
  buttonDisabled: {
    color: 'grey',
    backgroundColor: 'lightgrey',
    borderRadius: '30px',
    width: '100%',
    padding:'2%'
  },
  headerContainer: {
    backgroundColor: '#4901DB',
    color: 'white',
    padding: '2% 2%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  headerButton: {
    backgroundColor: 'rgba(0,0,0, 0.13)',
    color: 'rgba(255,255,255, 0.7)',
    fontSize: '1em'
  },
  header: {
    margin: '0px',
    fontSize: '2em'
  },
  cartContainer: {
    display: 'flex',
    margin: '0px',
    flexWrap: 'wrap',
    marginBottom: '1%',
    justifyContent:'center'
  },
  photo: {
    display: 'block',
    minWidth: '100%',
    minHeight: '100%',
    margin: ' auto',
    position: 'absolute',
    top: '-100%',
    right: '-100%',
    bottom: '-100%',
    left: '-100%',
  },
  crop: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  informationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5%'
  },
  removeButton: {
    width: '100%',
    backgroundColor: 'whitesmoke',
    color: '#990000',
    marginTop: '2%',
    padding:'2%',
    textAlign:'center',
    borderRadius:'5px ',
    cursor:'pointer'
  }
}

export const ItemsContainer = styled.div`{
  margin: 5% 5%;
  margin-bottom:10%;
  @media(min-width: 1200px) {
    margin: 3% 10%;
    margin-bottom:10%;
  }
  @media(max-width: 500px) {
    margin:5% 5%;
    margin-bottom:10%;
  }
}`

export const Item = styled.div`{
    width: 300px;
    margin:1%;
}`

export const PhotoHolder = styled.div`{
  background: #fff;
  vertical-align: top;
  width: 100%;
  margin-right: .5em;
  margin-bottom: .3em;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 3px 10px #cccccc;
  height:300px;
  display: "inline-block",
}
`