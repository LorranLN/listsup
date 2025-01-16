import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const baseWidth = 360;
const baseHeight = 640;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;

const scale = (size) => {
  const scaleFactor = (scaleWidth + scaleHeight) / 2;
  return size * scaleFactor;
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: scale(24),
    justifyContent: 'flex-start',
  },
  title: {
    color: '#FFF',
    fontSize: scale(32),
    fontWeight: 'bold',
    marginTop: scale(48),
  },
  text: {
    color: '#6B6B6B',
    fontSize: scale(18),
  },
  input: {
    flex: 1,
    height: scale(56),
    backgroundColor: '#1F1E25',
    borderRadius: scale(5),
    color: '#FFFF',
    padding: scale(16),
    fontSize: scale(16),
    marginRight: scale(12),
  },
  buttonText: {
    color: '#FFF',
    fontSize: scale(24),
  },
  button: {
    width: scale(56),
    height: scale(56),
    borderRadius: scale(5),
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: scale(36),
    marginBottom: scale(42),
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: scale(14),
    textAlign: 'center',
  },
});
