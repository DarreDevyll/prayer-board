import { Card, CardText, CardTitle, CardBody, CardImage, ImageContainer, Image, AnimatedGradientText } from "./styles/HomeContent.styled";
import { FaCircle } from "react-icons/fa";

export function HomeContent() {
  return (
    <>
    <Card>
      <CardText>
        <CardTitle>Vision:</CardTitle>
        <CardBody>
          <FaCircle font-size="12px" />&nbsp;That Dekalb would become a 
          praying city of light for all who come to it.
        </CardBody>
        <CardBody>
          <FaCircle font-size="12px" />&nbsp;That through the ministries God has brought here, 
          lives would be changed and more would come to know Jesus.
          </CardBody>
      </CardText>
      <CardImage>
        <ImageContainer></ImageContainer>
        <Image src='Candle.png'></Image>
      </CardImage>
    </Card>
    <Card>
      <CardImage>
        <ImageContainer></ImageContainer>
        <Image src='Bricks.png'></Image>
      </CardImage>
      <CardText>
        <CardTitle>Mission:</CardTitle>
        <CardBody>
          The goal of this web app is to provide a space for Christians from 
          any background to come together in prayer for the needs and the city of Dekalb.
        </CardBody>
        <CardBody>
          <FaCircle font-size="12px" />&nbsp;Interceding for the city and people of Dekalb
        </CardBody>
        <CardBody>
          <FaCircle font-size="12px" />&nbsp;Unified in mission and faith
          </CardBody>
        <CardBody>
          <FaCircle font-size="12px" />&nbsp;Building faith and hope for Dekalb through seeing 
          what God is doing in this city
        </CardBody>
      </CardText>
    </Card>
    <Card>
      <CardText>
        <CardTitle>Values:</CardTitle>
        <CardBody>
          <FaCircle font-size="12px" />&nbsp;Unity through Faith:
          <CardBody>
            Belief in the God of the Bible, and that the Bible is His Holy Word.
          </CardBody>
        </CardBody>
        <CardBody>
          <FaCircle font-size="12px" />&nbsp;Heart for Dekalb:
          <CardBody>
            Have faith for the things God is doing in Dekalb 
            and hungry for more to come to Christ.
          </CardBody>
        </CardBody>
        <CardBody>
          <FaCircle font-size="12px" />&nbsp;Move of the Spirit:
          <CardBody>
            Reliance on the power and the presence of God. We will not change Dekalb, 
            God will. We are simply interceding for the city and the people in it, 
            and are seeking God's will in this city.
          </CardBody>
        </CardBody>
        </CardText>
      <CardImage>
        <ImageContainer></ImageContainer>
        <Image src='Cross.png'></Image>
      </CardImage>
    </Card>
    </>
  )
}