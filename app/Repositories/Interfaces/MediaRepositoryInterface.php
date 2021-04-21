<?php

namespace App\Repositories\Interfaces;

interface MediaRepositoryInterface
{
   public function index();

   public function store($request);

   public function show($medium);

   public function update($request, $medium);

   public function destroy($medium);
}