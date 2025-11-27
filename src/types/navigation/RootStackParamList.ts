import { Product } from "../Product";

export type RootStackParamList = {
    HomeScreen: undefined;
    CartScreen: undefined;
    SettingsScreen: undefined;
    ProductDetailScreen: Product;
}