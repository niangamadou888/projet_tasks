import React from 'react';
import { View, Text } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import ProductList from './ProductList';
import client from './apollo';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View>
        <Text>Product List</Text>
        <ProductList />
      </View>
    </ApolloProvider>
  );
}
