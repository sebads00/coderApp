import ItemListContainer from "../components/ItemListContainer"
import {Container, Row} from "react-bootstrap"

const ProductsPage = () => {
    return(
        <>
        <Container>
            <Row>
            <ItemListContainer />
        </Row>
      </Container>
        </>
    )
}

export default ProductsPage