import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from "react";
import {
    Link,
    NavLink,
    Outlet,
    useLocation,
    useSearchParams
} from "react-router-dom";

import { collectionsData } from "../data/collectionsData";
import { toKebabCase } from 'js-convert-case';

export default function Coreallections() {
    return (
        <div>
            <ul>
                { collectionsData.map((collection) => (
                    <li>
                        <Card sx={{ maxWidth: 345 }}>
                            <Link
                                key={collection.albumId}
                                to={`/collections/${toKebabCase(collection.name)}`}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={collection.coverImg}
                                    alt={collection.name}
                                />
                            </Link>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {collection.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {collection.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </li>
                )) }
            </ul>
        </div>
    );
}