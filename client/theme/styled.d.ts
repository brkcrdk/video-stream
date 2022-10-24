/**
 * styled-componentsin theme dosyası içinde oluşturduğumuz tipleri önermesi için declaration dosyası oluşturmak gerekir
 * hem theme hem de declaration dosyasını yönetmemek adına tema dosyamız default styled-components teması kullanılarak extend edilir.
 * Boş bir şekilde extend etmek istediğimiz için no-empty-interface hatası alıyoruz. Bunu sadece bu dosyada kapatmak için bu satır eklendi.
 */
/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import theme from './index';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
