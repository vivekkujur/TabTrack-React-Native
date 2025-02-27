import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

const StopWatchPage = () => {

    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    const startTimeRef = useRef(0)
    const intervalTimeRef = useRef(null)


    const clickStart = () => {

        startTimeRef.current = Date.now() - time * 1000
        intervalTimeRef.current = setInterval(() => {
            setTime(Math.floor((Date.now() - startTimeRef.current) / 1000))
        }, 1000)
        setRunning(true)
        console.log("startTimeRef", startTimeRef.current)
    }

    const resetClick = () => {
        clearInterval(intervalTimeRef.current)
        setTime(0)
        setRunning(false)

    }

    const pauseClick = () => {
        clearInterval(intervalTimeRef.current)
        setRunning(false)

    }

    const resumeClick = () => {
        clickStart()

    }




    return (
        <View style={{ flax: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 50 }}>

            <Text style={{ color: 'black', fontSize: 25,fontWeight:'700' }}>Stop Watch</Text>
            <Text style={{ color: 'red', fontSize: 36}}>{time}s</Text>

            {
                running == false ?
                    <View>
                        <TouchableOpacity style={[styles.st_button, { backgroundColor: 'green' }]} onPress={clickStart}>
                            <Text style={styles.st_button_text}>Start</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.st_button, { backgroundColor: 'red' }]} onPress={resetClick}>
                            <Text style={styles.st_button_text}>Reset</Text>
                        </TouchableOpacity>

                    
                     <TouchableOpacity style={[styles.st_button, { backgroundColor: 'blue' }]} onPress={resumeClick}>
                                <Text style={styles.st_button_text}>resume</Text>
                            </TouchableOpacity>
                    
                    </View>

                    : running == true ?
                        <TouchableOpacity style={[styles.st_button, { backgroundColor: 'orange' }]} onPress={pauseClick}>
                            <Text style={styles.st_button_text}>pause</Text>
                        </TouchableOpacity> : <TouchableOpacity style={[styles.st_button, { backgroundColor: 'blue' }]} onPress={resumeClick}>
                            <Text style={styles.st_button_text}>resume</Text>
                        </TouchableOpacity>

            }



        </View>
    )
}

export default StopWatchPage

const styles = StyleSheet.create({
    st_button: {
        padding: '20',
        elevation: 10,
        marginTop: 16,
        borderRadius:10
    },
    st_button_text: {
        color: 'white',
        fontSize: 18,
        alignSelf:'center'
    }
})