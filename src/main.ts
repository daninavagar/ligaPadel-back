import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use((req, res, next) => {
  //   if (req.url === '/') {
  //     res.redirect('/')
  //   } else {
  //     next()
  //   }
  // })
  const PORT = process.env.PORT ? process.env.PORT : 3000
  await app.listen(PORT);
  
  console.log("Listening to the port ", PORT);
  
}
bootstrap();
