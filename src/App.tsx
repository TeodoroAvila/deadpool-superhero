import React, { useState } from 'react';
import { Avatar, Button, Card, Carousel } from 'antd';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const GapList = [4, 3, 2, 1];

const App: React.FC = () => {
  const [user, setUser] = useState(UserList[0]);
  const [gap, setGap] = useState(GapList[0]);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  }

  const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
  };

  const changeGap = () => {
    const index = GapList.indexOf(gap);
    setGap(index < GapList.length - 1 ? GapList[index + 1] : GapList[0]);
  };

  const { Meta } = Card;

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '350px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#6c0303',
  };
  
  return (
    <>
    <Card style={{ width: 700 }}
    >
      <Meta title="DeadPool" description="Ryan Reynolds" style={{border:40,paddingLeft:250, position:"absolute", fontSize:20}}/>
      <Avatar shape="square" style={{verticalAlign: 'middle', width:230, height:200, backgroundColor:"#FFFFFF"}} gap={gap}>
      <img src="https://cdn.dribbble.com/users/458522/screenshots/4615441/deadpool_love.jpg?compress=1&resize=400x300" alt="DeadPool" width={300} height={200} />
      </Avatar>

      <Button style={{ margin: '0px', verticalAlign: '0px' }} onClick={changeUser}>Fuerza</Button>
      <Button style={{ margin: '0 16px', verticalAlign: 'middle' }} onClick={changeGap}>Reflejos sobrehumanos</Button>
      <Button style={{ margin: '0 16px',verticalAlign: 'middle' }} onClick={changeGap}>Agilidad</Button>
      
      <Carousel afterChange={onChange} style={{width:650}}>
      <div>
        <h3 style={contentStyle}><img src="https://p4.wallpaperbetter.com/wallpaper/597/296/48/deadpool-red-black-white-hd-wallpaper-preview.jpg" alt="DeadPool" width={650} /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="https://p4.wallpaperbetter.com/wallpaper/73/147/601/movie-deadpool-2-deadpool-wallpaper-preview.jpg" alt="DeadPool" width={650}/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/66953.jpg" alt="DeadPool" width={650}/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="https://p4.wallpaperbetter.com/wallpaper/873/666/369/movie-crossover-deadpool-thanos-wallpaper-preview.jpg" alt="DeadPool" width={650} /></h3>
      </div>
    </Carousel>


    <Button style={{ margin: '30px', verticalAlign: '' }} onClick={changeUser}>Descartar</Button>
    <Button style={{ margin: '30px', backgroundColor:'#80D2ED', color:'#FFFFFF'}} onClick={changeUser}>Usar</Button>
         
      </Card>
    </>
  );
};

export default App;