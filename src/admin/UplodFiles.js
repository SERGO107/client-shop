import React from 'react'

export const UplodFiles = () => {
    // fetch('http://localhost:3001/upload', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8',
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //     body: JSON.stringify()
    // })
    return (
        <div>
            <form action='http://localhost:3001/upload' method="post" enctype="multipart/form-data">
                <label>Файл</label><br />
                <input type="file" name="filedata" /><br /><br />
                <input type="submit" value="Send" />

            </form>
        </div>
    )
}
