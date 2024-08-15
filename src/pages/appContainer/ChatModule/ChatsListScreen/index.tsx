import React, {useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import R from '@theme';
import {useTheme} from '@react-navigation/native';
import {
  SearchBar,
  FlatList,
  FixedContainer,
  ScreenBoiler,
  MessagesCard,
  Button,
} from '@components';
import {CONSTANTS} from '@constants';
import {authLogout} from '@store/auth/authSlice';
import {userLogOut} from '@store/user/userSlice';

const ChatsListScreen = props => {
  const {navigation} = props;
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const common = useSelector(state => state.common);

  const [text, setText] = useState('');
  const [page, setPage] = useState(1);
  const [chats, setChats] = useState(CONSTANTS.chatsList);
  const [deleted, setDeleted] = useState(undefined);

  const readChat = item => {};

  const _renderList = ({item, index}) => {
    return (
      <MessagesCard
        item={item}
        index={index}
        navigation={navigation}
        onPress={() => readChat(item)}
        onDelete={data => setDeleted(data)}
        data={chats}
      />
    );
  };

  const onLogOut = () => {
    dispatch(authLogout());
    dispatch(userLogOut());
  };

  const onTriggerPostApi = data => {};

  return (
    <ScreenBoiler mainHeading={t('chat')} isBack={false}>
      {/* <Stagger onPress={onPress} /> */}
      <FixedContainer>
        <Button
          onPress={onLogOut}
          value={'Log Out'}
          bgColor={colors.primary}
          width={'70%'}
          gutterTop={10}
          gutterBottom={20}
          size={'md'}
        />

        <View style={[R.styles.contentView, {paddingHorizontal: 0}]}>
          <SearchBar
            placeholder={'Search Users'}
            onChange={data => {
              setText(data);
            }}
            value={text}
            containerStyles={{paddingHorizontal: R.unit.scale(10)}}
          />

          <FlatList
            listData={chats}
            renderList={_renderList}
            totalCount={10}
            emptyListHeading={'Chat so empty :('}
            emptyListText={'There are no new users available now for chat'}
            containerStyles={{paddingTop: 0}}
            contentContainerStyles={{
              rowGap: R.unit.scale(1),
              paddingHorizontal: 0,
            }}
          />
        </View>
      </FixedContainer>
    </ScreenBoiler>
  );
};
export default ChatsListScreen;
