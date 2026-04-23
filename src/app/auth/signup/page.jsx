import React from 'react';
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";


const SignUpPage = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};
        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    };

    return (
        <div>
            <h2>Please sign up</h2>
        </div>
    );
};

export default SignUpPage;