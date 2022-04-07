import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...r }: SkillCardProps) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            {...r}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    }
})