import React from 'react'

export default async function Comments({ cmtPromise }) {
    const comments = await cmtPromise;
    return (
        <div>
            {
                comments.map((comment) => (
                    <div className="p-4" key={comment.id}>
                        <p>
                            Name: {comment.name}<br />
                            Email: {comment.email}<br />
                            {comment.body}<br />
                        </p>
                    </div>
                ))
            }

        </div>
    )
}
