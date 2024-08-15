import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import R from '@theme';
import {getAllFriends} from '@store/services/apis';
import {
  FixedContainer,
  ScreenBoiler,
  SearchBar,
  FlatList,
  FriendCard,
} from '@components';
import {IUser} from '@types';

const FriendsScreen = () => {
  const [text, setText] = useState('');
  const [friends, setFriends] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getFriends();
  }, []);

  const getFriends = async () => {
    const response = await getAllFriends();
    console.log('respons', response);
    setFriends([...response.data]);
    setIsLoading(false);
  };

  const _renderList = ({item, index}) => {
    console.log('ITEM', item, index);
    return <FriendCard data={item} index={index} fullList={friends} />;
  };

  return (
    <ScreenBoiler isSubHeader mainHeading={'Friends'} isBack={false}>
      <FixedContainer>
        <View style={R.styles.contentView}>
          {/* <SearchBar
            placeholder={'Search'}
            onChange={data => {
              setText(data);
            }}
            value={text}
          /> */}

          {/* <SkeletonLoader /> */}

          <FlatList
            listData={friends}
            renderList={_renderList}
            totalCount={10}
          />
        </View>
      </FixedContainer>
    </ScreenBoiler>
  );
};

export default FriendsScreen;
