import { Text, Link } from '@chakra-ui/react';
// import Link from 'next/link';

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Text
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            display="block"
            {...rest}
        >
            <Link href={to}>{children}</Link>
        </Text>
    );
}

export default MenuItem;