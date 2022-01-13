import React, {useEffect} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  CCard,
  CGap,
  CHeader,
  CListHeader,
  CListPopular,
  CSlider,
  CTitle,
} from '../../components';
import {
  getArticles,
  getCategories,
  getContents,
  getSlider,
} from '../../redux/action';
import {RootState} from '../../redux/reducer';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {sliderReducer, contentReducer, categoriesReducer, articlesReducer} =
    useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getSlider());
    dispatch(getContents());
    dispatch(getCategories());
    dispatch(getArticles());
  }, []);

  const {microLearning, kursus} = contentReducer;
  const {slider} = sliderReducer;
  const {categories} = categoriesReducer;
  const {articles} = articlesReducer;
  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <CHeader
        title="Masuk"
        member
        onPress={() => navigation.navigate('Login')}
      />
      <View style={styles.container}>
        {slider.length > 0 && <CSlider slider={slider} />}
      </View>
      <CListHeader title="Kursus" />
      {kursus.length > 0 && (
        <FlatList
          data={kursus}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => <CCard key={index} data={item} />}
          ItemSeparatorComponent={() => <CGap width={10} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentContainer}
        />
      )}
      <CGap height={10} />
      <CListHeader title="Microlearning" />
      {microLearning.length > 0 && (
        <FlatList
          data={microLearning}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => <CCard key={index} data={item} />}
          ItemSeparatorComponent={() => <CGap width={10} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentContainer}
        />
      )}
      <View>
        <CTitle title="Artikel" />
        {categories.length > 0 && (
          <FlatList
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <CListPopular
                key={index}
                title={item.name}
                onPress={() => navigation.navigate('Search', item)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.contentContainer}
          />
        )}
        {articles.length > 0 && (
          <FlatList
            data={articles}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <CCard key={index} data={item} type="Articles" />
            )}
            showsVerticalScrollIndicator={false}
            style={styles.contentContainer}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
  },
  contentContainer: {marginHorizontal: 20},
});
