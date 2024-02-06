import React from 'react';
import Project from '../Project';

export default function Portfolio() {
    // Create an array with 6 elements (can be any value, since we're not using the values)
    const projects = Array.from({ length: 6 });

    return (
        <div className="container">
            <div className="row">
                {projects.map((_, index) => (
                    <div className="col-lg-4 col-sm-12 mb-3" key={index}>
                        <Project />
                    </div>
                ))}
            </div>
        </div>
    );
}
