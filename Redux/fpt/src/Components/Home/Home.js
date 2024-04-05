import React from 'react';
import { connect } from 'react-redux';
function Home(props) {
  console.log('check', props.dataRedux);
  let listUsers = props.dataRedux;
  //
  const handleClick = (users) => {
    console.log('check', users);
    props.deleteUserRedux(users);
  };
  return (
    <div className='container'>
      <h1>Home</h1>
      {listUsers?.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => handleClick(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
//
const mapData = (state) => {
  return { listData: state.datas };
};
//
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: 'DELETE_USER', payload: userDelete }),
  };
};

export default connect(mapStateToProps, mapData, mapDispatchToProps)(Home);
