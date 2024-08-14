import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import R from '@theme';
import {
  Text,
  FixedContainer,
  ScreenBoiler,
  SearchBar,
  FlatList,
} from '@components';

const CoachesScreen = props => {
  const {navigation} = props;

  const [text, setText] = useState('');

  // const _renderList = ({item}) => {
  //   return <CoachCard item={item} isSendConnection />;
  // };

  return (
    <ScreenBoiler isSubHeader mainHeading={'List'} isBack={false}>
      <FixedContainer>
        <View style={R.styles.contentView}>
          <SearchBar
            placeholder={'Search'}
            onChange={data => {
              setText(data);
            }}
            value={text}
          />

          {/* <SkeletonLoader /> */}

          {/* <FlatList
            listData={members}
            renderList={_renderList}
            totalCount={10}
            noOfColumns={2}
          /> */}
        </View>
      </FixedContainer>
    </ScreenBoiler>
  );
};

export default CoachesScreen;
