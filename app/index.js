import { Stack, useRouter } from 'expo-router'
import { View, SafeAreaView, Text, ScrollView } from 'react-native'

import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"

import { COLORS, images, icons, SIZES } from '../constants'
import { useState } from 'react'

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) 
                                router.push(`/search/${searchTerm}`)
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home