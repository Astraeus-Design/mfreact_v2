import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
/*import './index.css';*/

const CreateBioCard = (props) => {

   let tempObj=props.personid;

 return(

  <Card>
    <Image src={tempObj.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{tempObj.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {tempObj.name} is a pitiful recluse who lives in the town of misery.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={tempObj.profile}>
        <Icon name='user' />
        0 Friends 67 enemies
      </a>
    </Card.Content>
  </Card>)
};

export default CreateBioCard;
