import { StyleSheet, Text, TextInput, View } from "react-native";
import { Controller, useForm } from 'react-hook-form'
import Button from "@/shared/ui/button";
import React from "react";

export default function SigninForm() {
    const { control, handleSubmit } = useForm()
    const handleSignIn = () => {
        alert("Okay");
    }
    return (
        <View style={styles.formContainer}>
            <View style={styles.formItem}>
                <Text style={styles.label}>Email Or Phone Number</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
            </View>
            <View style={styles.formItem}>
                <Text style={styles.label}>Username</Text>
                <Controller
                    control={control}
                    name="username"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />

            </View>
            <View style={styles.formItem}>
                <Text style={styles.label}>Password</Text>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
            </View>
            <Button onPress={handleSignIn}>Sign In</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        width: "100%",
        gap: 24,
    },
    formItem: {
        gap: 4,
    },
    label: {
        color: "black",
        fontSize: 16,
        textTransform: "uppercase",
    },
    input: {
        width: "100%",
        height: 40,
        borderBottomWidth: 1,
        borderColor: "#3D4F58",
        paddingHorizontal: 10,
    },
})