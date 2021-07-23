import React from 'react';
import '../assets/components/Categories.scss';

const Categories = (props) => {
  const { title } = props;
  return (
    <div>
      <h3 className="categories__title">{title}</h3>
      {props.children}
    </div>
  );
};

export default Categories;
