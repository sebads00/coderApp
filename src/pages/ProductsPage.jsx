import ItemListContainer from "../components/ItemListContainer"
import {Container, Row} from "react-bootstrap"

const ProductsPage = () => {
    return(
        <>
        <h1>products</h1>
        <Container>
            <Row>
            <ItemListContainer />
        </Row>

      </Container>
        </>
    )
}

export default ProductsPage