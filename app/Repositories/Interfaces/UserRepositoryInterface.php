<?php

namespace App\Repositories\Interfaces;

interface UserRepositoryInterface
{
   public function index();

   public function create($request);

   public function show($user);

   public function update($request, $user);

   public function destroy($user);
}