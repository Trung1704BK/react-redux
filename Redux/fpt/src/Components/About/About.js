import React from 'react';
import { connect } from 'react-redux';

function About(props) {
  console.log('data', props.dataRedux);
  let listData = props.dataRedux;
  return (
    <div>
      <h1>About</h1>
      {listData.map((item, index) => (
        <div key={item.id}>
          {index}
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

export default connect(mapStateToProps)(About);
