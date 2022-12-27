import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { EventStyles } from '../container/style'

const Event = ({ props }) => {
    let { event_profile_img, event_name, readable_from_date, readable_to_date, event_price_from, event_price_to, keywords, city, country } = props.item

    const [like, setLike] = useState(false)

    const setLikeAndUnlike = () => {
        setLike(!like)
    }
    return (
        <View style={EventStyles.mainCon}  >
            <Image
                style={EventStyles.eventImg}
                source={{ uri: event_profile_img }}
            />
            <View style={{ marginLeft: 10 }}>
                <Text style={EventStyles.eventName}>{event_name.length > 25 ? event_name.substring(0, 20) + '...' : event_name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={EventStyles.eventDuration}>{readable_from_date}{readable_to_date && ' - '} {readable_to_date}</Text>
                </View>
                <Text style={EventStyles.eventPrice}>{'€' + event_price_from}{event_price_to !== null && ' - '} {'€' + event_price_to}</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        keywords.map((keyword,index) => {
                            return <View key={index} style={EventStyles.eventCategoryCon}>
                                <Text style={EventStyles.eventCategoryText}>{keyword}</Text>
                            </View>
                        })
                    }
                </View>

            </View>
            <View style={{ direction: 'rtl' }}>
                <Image
                    style={EventStyles.IconArrowImg}
                    source={require('../assets/arrow.png')}
                />
                <Text style={[EventStyles.eventCity]}>{city}, {country}</Text>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity onPress={setLikeAndUnlike}>
                        {like ? <Image
                            style={EventStyles.IconLikeImg}
                            source={require('../assets/like.png')}
                        /> :
                            <Image
                                style={EventStyles.IconLikeImg}
                                source={require('../assets/unlike.png')}
                            />
                        }
                    </TouchableOpacity>
                    <Image
                        style={EventStyles.IconShareImg}
                        source={require('../assets/share.png')}
                    />
                </View>
            </View>
        </View>
    )

}

export default Event