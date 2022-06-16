import { computed } from 'vue';

export function getSize(props, { DEFAULT = 'md', only = ['sm', 'md', 'lg'] }) {
    return computed(() => {
        if (props.size) {
            return props.size;
        }

        if (props.sm && only.includes('sm')) {
            return 'sm';
        }
        if (props.md && only.includes('md')) {
            return 'md';
        }
        if (props.lg && only.includes('lg')) {
            return 'lg';
        }

        return DEFAULT;
    });
}

export const sizes = {
    size: {
        type: String,
        default: null,
    },
    sm: {
        type: Boolean,
        default: false,
    },
    md: {
        type: Boolean,
        default: false,
    },
    lg: {
        type: Boolean,
        default: false,
    },
};
