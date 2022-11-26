import loadingImage from '../../assets/loading.gif';
import { AnimatePresence, motion } from 'framer-motion';


const LoadingButton = () => {
    return (
        <AnimatePresence>
            <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ width: '20px', height: '20px', display: 'inline-block' }}
            >
                <img style={{ maxWidth: '100%' }} src={loadingImage} alt="Loading " />
            </motion.span>
        </AnimatePresence>
    )
};

export default LoadingButton;