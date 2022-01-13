import React from 'react'
import { View, Text, Image } from 'react-native'
import moment from 'moment'
import HTMLView from 'react-native-htmlview';

import { Config } from 'App/Config'
import { Images } from 'App/Theme'
import Styles from './EpisodeScreen.style'

class EpisodeScreen extends React.Component {
    render() {
        const {
            navigation: {
                state: {
                    params: { data },
                },
            },
        } = this.props

        const imageSource = {
            uri: data.image.original || Config.PLACEHOLDER_URL,
        }
        const airstamp = moment(data.airstamp).format('dddd, MMMM Do, YYYY [at] HH:mm')

        return (
            <View style={Styles.container}>
                <View style={Styles.imageContainer}>
                    <Image style={Styles.image} source={imageSource} resizeMode={'cover'} />
                </View>
                
                <View style={Styles.infoContainer}>
                    <Text style={Styles.title}>
                        Episode Name:&nbsp;
                        <Text style={Styles.name}>{data.name}</Text>
                    </Text>

                    <View style={Styles.ratingContainer}>
                        <Text style={Styles.title}>
                            Rating:&nbsp;
                        </Text>

                        <Image style={Styles.star} source={Images.star} resizeMode={'contain'} />
                        
                        <Text style={Styles.rating}>
                            {data.rating.average}
                        </Text>
                    </View>

                    <Text style={Styles.title}>
                        Number:&nbsp;
                        <Text style={Styles.name}>Season {data.season}, Episode {data.number}</Text>
                    </Text>

                    <Text style={Styles.title}>
                        Airdate:&nbsp;
                        <Text style={Styles.name}>{airstamp}</Text>
                    </Text>

                    <Text style={Styles.title}>
                        Runtime:&nbsp;
                        <Text style={Styles.name}>{data.runtime} minutes</Text>
                    </Text>

                    <View style={Styles.overviewContainer}>
                        <Text style={Styles.summaryTitle}>Summary</Text>

                        <HTMLView
                            value={data.summary}
                            stylesheet={Styles}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default EpisodeScreen