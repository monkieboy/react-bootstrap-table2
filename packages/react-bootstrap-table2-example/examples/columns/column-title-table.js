/* eslint no-unused-vars: 0 */
import React from 'react';

import { BootstrapTableful } from 'react-bootstrap-table2';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  title: true
}, {
  dataField: 'name',
  text: 'Product Name',
  title: (cell, row, rowIndex, colIndex) => `this is custom title for ${cell}`
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
const columns = [{
  dataField: 'id',
  text: 'Product ID',
  title: true
}, {
  dataField: 'name',
  text: 'Product Name',
  title: (cell, row, rowIndex, colIndex) => \`this is custom title for \${cell}\`
}, {
  dataField: 'price',
  text: 'Product Price'
}];

<BootstrapTableful keyField='id' data={ products } columns={ columns } />
`;

export default () => (
  <div>
    <BootstrapTableful keyField="id" data={ products } columns={ columns } />
    <Code>{ sourceCode }</Code>
  </div>
);