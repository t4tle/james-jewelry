import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  FlatList, 
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import Colors from '@/constants/colors';
import ProductCard from '@/components/ProductCard';
import CollectionCard from '@/components/CollectionCard';
import { products, collections } from '@/mocks/products';

export default function HomeScreen() {
  const router = useRouter();
  const [refreshing, setRefreshing] = React.useState(false);

  const featuredProducts = products.filter(product => product.featured);
  const newArrivals = products.filter(product => product.new);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate a refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const handleSeeAllProducts = () => {
    router.push('/search');
  };

  const handleSeeAllCollections = () => {
    // In a real app, this would navigate to a collections page
    router.push('/search');
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Collections Carousel */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Collections</Text>
          <TouchableOpacity 
            style={styles.seeAllButton} 
            onPress={handleSeeAllCollections}
          >
            <Text style={styles.seeAllText}>See All</Text>
            <ChevronRight size={16} color={Colors.primary} />
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={collections}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CollectionCard collection={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.collectionsList}
        />
      </View>

      {/* Featured Products */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured</Text>
          <TouchableOpacity 
            style={styles.seeAllButton} 
            onPress={handleSeeAllProducts}
          >
            <Text style={styles.seeAllText}>See All</Text>
            <ChevronRight size={16} color={Colors.primary} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.productsGrid}>
          {featuredProducts.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>
      </View>

      {/* New Arrivals */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <TouchableOpacity 
            style={styles.seeAllButton} 
            onPress={handleSeeAllProducts}
          >
            <Text style={styles.seeAllText}>See All</Text>
            <ChevronRight size={16} color={Colors.primary} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.productsGrid}>
          {newArrivals.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  collectionsList: {
    paddingRight: 16,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
