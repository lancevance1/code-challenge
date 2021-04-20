
<!-- @extends('layouts.app')
@section('title', 'Home')

@section('content')

        <div class="flex-center position-ref full-height">

                    <div id="app">
                        <media-component :token="'{{$user->api_token}}'"></media-component>
                    </div>
        </div>
@endsection -->


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
  </head>
  <body>
    @inertia
  </body>
</html>